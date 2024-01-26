export namespace main {
	
	export class  {
	    t: string;
	    fv: number;
	    mav: number;
	    nstv: number;
	    nstp: number;
	    rsi: number;
	    macdv: number;
	    macdsignal: string;
	    tsignal: string;
	    avgsignal: string;
	    cp: number;
	
	    static createFrom(source: any = {}) {
	        return new (source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.t = source["t"];
	        this.fv = source["fv"];
	        this.mav = source["mav"];
	        this.nstv = source["nstv"];
	        this.nstp = source["nstp"];
	        this.rsi = source["rsi"];
	        this.macdv = source["macdv"];
	        this.macdsignal = source["macdsignal"];
	        this.tsignal = source["tsignal"];
	        this.avgsignal = source["avgsignal"];
	        this.cp = source["cp"];
	    }
	}
	export class StockData {
	    data: [];
	
	    static createFrom(source: any = {}) {
	        return new StockData(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.data = this.convertValues(source["data"], );
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}

}

