import {TippyOptions} from "solid-tippy";
import {createComputed, createEffect, onCleanup, untrack} from "solid-js";
import makeTippy, {Content, followCursor} from "tippy.js";

export default function tippy<T extends Element>(
    target: T,
    opts: () => TippyOptions | undefined,
): void {
    createEffect(() => {
        let options = opts();
        if (!options || !options.props) {
            options = {
                props: {}
            }
        }

        const title = target.getAttribute('title');
        if (!options.props?.content && !title) {
            return;
        }
        target.removeAttribute('title');

        if (options) {
            options.hidden = true;
            options.props!.allowHTML = true;
            options.props!.content = options.props?.content || title as string;
            //options.props!.followCursor = false;
            //options.props!.plugins = [followCursor];
        }
        const instance = makeTippy(target, untrack(() => options?.props));

        createComputed(() => {
            if (options?.disabled) {
                instance.disable();
            } else {
                instance.enable();
            }
        });

        createComputed(() => {
            if (options?.hidden) {
                instance.hide();
            } else {
                instance.show();
            }
        });

        createComputed(() => {
            instance.setProps({
                ...(options?.props ?? {}),
            });
        });

        onCleanup(() => {
            instance.destroy();
        });
    });
}