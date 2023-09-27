export interface Country {
    flags :{
        png:string;
        svg:string;
    } ,
    subregion:string;
    population: number;
    region:string;
    capital:string;
    png:string;
    name:{
        common:string;
        official:string;
    },
    tld :string;
    currencies : {
        curn : {
            name:string;
            symbol: string;
        }
    }
}


export interface pageProps {
    params : {name :string}
}