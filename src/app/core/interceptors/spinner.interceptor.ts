
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpEvent, HttpResponse, HttpHandler } from "@angular/common/http";
import { NgxSpinnerService } from "ngx-spinner";
import { Observable } from "rxjs";
import { finalize, tap } from "rxjs/operators";
import { Time } from '@angular/common';
// import { delay } from 'q';

const bodyScrollClass: string = "loaderBodyScrollFix";
@Injectable({
    providedIn: 'root'
})
export class SpinnerInterceptor implements HttpInterceptor {
    private totalRequests = 0;
    // timer: Time;
    private renderer: Renderer2;
    constructor(private spinner: NgxSpinnerService, private rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const start = performance.now();
      
        return next.handle(req)
            .pipe(tap(async (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    /** below is the code to check if the API response time is less then make it at least long so loader can seen properly */
                    // await this.checkResponseTime(start);
                    //    console.info("close");

                    // this.onEnd(); // as in finalize, we are hiding the spinner 
                }
            },
                (err: any) => {
                    // this.decrementActiveRequests();
                    // this.onEnd();
                }),
                finalize(() => this.decrementActiveRequests())
            )

        // .pipe(finalize(() => {
        //     this.totalRequests--;
        //     if (this.totalRequests == 0) {
        //         this.hideLoader();
        //     }
        // }))
    }
    /** below is the code to check if the API response time is less then make it at least long so loader can seen properly */
    // private async checkResponseTime(start): Promise<void> {
    //     // console.info((performance.now() - start))
    //     if ((performance.now() - start) <= 1000) {
    //         // console.info("in delay");
    //         return delay(750);
    //     }
    // }

    private decrementActiveRequests() {
        this.totalRequests--;
        if (this.totalRequests == 0) {
            this.hideLoader();
        }
    }
    private onEnd(): void {
        this.hideLoader();
    }
    private showLoader(): void {
        this.spinner.show("app-spinner");
        // this.renderer.addClass(document.body, bodyScrollClass);
    }
    private hideLoader(): void {
        this.spinner.hide("app-spinner");
        // this.renderer.removeClass(document.body, bodyScrollClass);
    }
}