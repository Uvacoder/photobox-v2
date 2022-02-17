import {t as translate} from "i18next";

export function t(key: string, options?: any): string {
    return translate(key, options) as string;
}
