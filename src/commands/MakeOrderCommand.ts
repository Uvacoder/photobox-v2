import Command from "../interface/command/Command";
import Application from "../Application";
import {measureSync} from "../utils/decorators";
import {showConfirmationMessage} from "../utils/utils";
import {t} from "../i18n/i18n";

export default class MakeOrderCommand implements Command {
    private app: Application;

    constructor(app: Application) {
        this.app = app;

    }

    @measureSync
    execute(uuid: string): void {
        if (this.app.parameters.onMakeOrderCallback) {
            let photos = this.app.getViewport().serializePhotos();
            if (!photos.length) {
                return;
            }
            // confirm user about checking all photos
            showConfirmationMessage(
                t('checkAllPhotosBeforeOrder'),
                t('confirmation.orderWithoutChecking'),
                t('confirmation.cancelAndCheck')
            ).then((result) => {
                if (!result.isConfirmed) {
                    return;
                }
                this.app.parameters.onMakeOrderCallback({
                    options: this.app.parameters.options,
                    selectedOptions: this.app.getViewport().getSelectedOptions(),
                    extra: '',
                    photos: photos
                });
            })

        }
    }


}
