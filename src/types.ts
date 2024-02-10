export type Enrichments =
  | 'companies_data'
  | 'disposable_email_checker'
  | 'domains_service'
  | 'emails_validator_service'
  | 'imessage_checker'
  | 'phones_enricher_service'
  | 'trustpilot_service'
  | 'whatsapp_checker';

export type Region =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AZ'
  | 'BA'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BN'
  | 'BO'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FM'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GE'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GR'
  | 'GT'
  | 'GY'
  | 'HK'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IQ'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KR'
  | 'KW'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LI'
  | 'LK'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MD'
  | 'ME'
  | 'MG'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MQ'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NE'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PY'
  | 'QA'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'ST'
  | 'SV'
  | 'TD'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WS'
  | 'ZA'
  | 'ZM'
  | 'ZW';

export type Language =
  | 'ach'
  | 'af'
  | 'ak'
  | 'am'
  | 'ar'
  | 'az'
  | 'ban'
  | 'be'
  | 'bem'
  | 'bg'
  | 'bn'
  | 'br'
  | 'bs'
  | 'ca'
  | 'ceb'
  | 'chr'
  | 'ckb'
  | 'co'
  | 'crs'
  | 'cs'
  | 'cy'
  | 'da'
  | 'de'
  | 'ee'
  | 'el'
  | 'en'
  | 'eo'
  | 'es'
  | 'es-419'
  | 'et'
  | 'eu'
  | 'fa'
  | 'fi'
  | 'fil'
  | 'fo'
  | 'fr'
  | 'fy'
  | 'ga'
  | 'gaa'
  | 'gd'
  | 'gl'
  | 'gn'
  | 'gu'
  | 'ha'
  | 'haw'
  | 'hi'
  | 'hr'
  | 'ht'
  | 'hu'
  | 'hy'
  | 'ia'
  | 'id'
  | 'ig'
  | 'is'
  | 'it'
  | 'iw'
  | 'ja'
  | 'jw'
  | 'ka'
  | 'kg'
  | 'kk'
  | 'km'
  | 'kn'
  | 'ko'
  | 'kri'
  | 'ky'
  | 'la'
  | 'lg'
  | 'ln'
  | 'lo'
  | 'loz'
  | 'lt'
  | 'lua'
  | 'lv'
  | 'mfe'
  | 'mg'
  | 'mi'
  | 'mk'
  | 'ml'
  | 'mn'
  | 'mr'
  | 'ms'
  | 'mt'
  | 'my'
  | 'ne'
  | 'nl'
  | 'nn'
  | 'no'
  | 'nso'
  | 'ny'
  | 'nyn'
  | 'oc'
  | 'om'
  | 'or'
  | 'pa'
  | 'pcm'
  | 'pl'
  | 'ps'
  | 'pt-BR'
  | 'pt-PT'
  | 'qu'
  | 'rm'
  | 'rn'
  | 'ro'
  | 'ru'
  | 'rw'
  | 'sd'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sn'
  | 'so'
  | 'sq'
  | 'sr'
  | 'sr-Latn'
  | 'sr-ME'
  | 'st'
  | 'su'
  | 'sv'
  | 'sw'
  | 'ta'
  | 'te'
  | 'tg'
  | 'th'
  | 'ti'
  | 'tk'
  | 'tl'
  | 'tlh'
  | 'tn'
  | 'to'
  | 'tr'
  | 'tt'
  | 'tum'
  | 'tw'
  | 'ug'
  | 'uk'
  | 'ur'
  | 'uz'
  | 'vi'
  | 'wo'
  | 'xh'
  | 'xx-bork'
  | 'xx-elmer'
  | 'xx-hacker'
  | 'xx-pirate'
  | 'yi'
  | 'yo'
  | 'zh-CN'
  | 'zh-TW'
  | 'zu';
