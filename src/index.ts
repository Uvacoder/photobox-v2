import Application from "./Application";
import {Option} from "./interface/options/Option";
import OptionsHandler from "./utils/OptionsHandler";

export default class PhotoBox {
    public onInit: (() => void) | undefined;
    private application: Application;
    private options: Option[];

    constructor(options: Option[], onStart: (arg: PhotoBox) => void) {
        this.options = options;
        this.application = new Application(this.options, this.onInit);
        this.application.onInitGlob = () => {
            onStart(this);
        }

        this.application.init().then(() => {
            onStart(this);
        });

        const omap = OptionsHandler.toMap(options);
        console.log(omap);
       for(let k of  omap.keys()){
           console.log(typeof k);
       }
    }

    public addImages(images: any[]) {
        this.application.addImages1(images)
      // setTimeout(() =>  this.application?.addImages1(images), 500);
    }
}
