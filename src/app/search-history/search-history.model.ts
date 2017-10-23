export class UserSearch{
    searchText: string;
    searchDate: string;

    constructor(t: string){
        this.searchText = t;
        var tmpDate = new Date(Date.now());
        this.searchDate = tmpDate.toLocaleString();
    }
}
