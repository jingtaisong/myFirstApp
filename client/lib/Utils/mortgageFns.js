import {FREQUENCY_MONTHLY} from '../Singletons/time';

export function mortgageMonthlyPayment(principal, annualRate, numberOfYears, frequency = FREQUENCY_MONTHLY) {
    switch(frequency) {
        case FREQUENCY_MONTHLY: {
            let periodRate = annualRate / 12;
            let numberOfPeriods = numberOfYears * 12;
            let compoundedMultiple = Math.pow(1 + periodRate, numberOfPeriods);
            let periodPayment = principal * periodRate * compoundedMultiple / (compoundedMultiple - 1);
            return periodPayment;
        }
        default:
            throw('unsupported frequency ' + frequency);
    }
}