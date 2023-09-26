export interface Country {
    flags :{
        png:string;
    } 
    population: number;
    region:string;
    capital:string;
    png:string;
    name:{
        common:string;
    }
}


export interface pageProps {
    params : {name :string}
}