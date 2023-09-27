export interface Country {
    flags :{
        png:string;
        svg:string;
    } 
    population: number;
    region:string;
    capital:string;
    png:string;
    name:{
        common:string;
        official:string;
    }
}


export interface pageProps {
    params : {name :string}
}