import { browser, element, by } from 'protractor';

export enum idType {
    id,
    name,
    className,
    linkText,
    xpath,
    css,
    buttonText,
    options
}

export class basePage {
    ElementLocator(obj) {
        switch (obj.type) {
            case idType[idType.id]:
                 return element(by.id(obj.value));
            case idType[idType.name]:
                 return element(by.name(obj.value));
            case idType[idType.className]:
                 return element(by.className(obj.value));
            case idType[idType.linkText]:
                 return element(by.linkText(obj.value));
            case idType[idType.xpath]:
                 return element(by.xpath(obj.value));
            case idType[idType.css]:
                 return element(by.css(obj.value));
            case idType[idType.buttonText]:
                 return element(by.buttonText(obj.value));
            case idType[idType.options]:
                 return element(by.options(obj.value));
            default:
                break;
        }
    }
} 