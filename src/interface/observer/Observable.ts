interface Observable {

    subscribe(observer: Observer):void
    unsubscribe(observer: Observer):void
    notify(news:String):void
}
