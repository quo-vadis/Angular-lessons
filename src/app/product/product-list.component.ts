import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
    templateUrl: "./product-list.component.html",
    styleUrls : ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit{
    pageTitle: string = "Product List";
    imageWidth :  number = 50;
    imageMargin : number = 2;
    isShow : boolean = false;
    errorMessage : string;
    
    _listFilter : string;
    get listFilter() :string{
        return this._listFilter;
    }
    set listFilter(value : string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter 
            ? this.performFilter(this.listFilter) 
            : this.products;
    }

    filteredProducts : IProduct [];
    products : IProduct[] = [];

    constructor(private _productService:ProductService ){
        this.filteredProducts = this.products;
        this.listFilter = 'cart';
    }

    toggleImage(){
        this.isShow =  !this.isShow;
    }
    performFilter( filterBy : string) : IProduct []{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product : IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
    onRatingClicked(message : string) : void{
        this.pageTitle = 'Product List: ' + message;
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe((products) => {
                this.products = products;
                this.filteredProducts = this.products;
            }, (error) => {
                this.errorMessage = <any>error;
            }); 
    }
}