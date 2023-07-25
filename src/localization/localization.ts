import { EnDictionary, enDict } from './en';
import { RuDictionary, ruDict } from './ru';

interface Localization {
	EN: EnDictionary;
	RU: RuDictionary;
}

export enum Languages {
	EN = 'EN',
	RU = 'RU',
}

export type LocalizationLanguage = 'EN' | 'RU';

export const localization: Localization = { EN: enDict, RU: ruDict };
