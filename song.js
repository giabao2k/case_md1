class Song{
    name;
    singer;
    link;
    image;
    constructor(name, singer, link, image){
        this.name = name;
        this.singer = singer;
        this.link = link;
        this.image = image;
    }
    getName(){
        return this.name;
    }
    getSinger(){
        return this.singer;
    }
    getLink(){
        return this.link;
    }
    getImage(){
        return this.image;
    }
}