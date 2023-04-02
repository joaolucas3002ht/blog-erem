import dayjs from 'dayjs';
import '../lib/dayjs';

export function dateFormat(date: Date): string {
   return dayjs(date).format('DD [de] MMMM [de] YYYY');
}
