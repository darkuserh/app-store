const CURRENCY_FORMATTER=new Intl.NumberFormat(undefined,{
    currency:'UAH',
    style:'currency'

})
export function FormatCurrency(number:number){
return CURRENCY_FORMATTER.format(number)
}