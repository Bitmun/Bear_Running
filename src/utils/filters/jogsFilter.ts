import { DateRange } from '@pages/Home/type';

import { Jog } from 'services/type';

export const filterJogsByDate = (jogs: Jog[], dateRange: DateRange): Jog[] => {
  const { from, to } = dateRange;

  if (!from && !to) {
    return jogs;
  }

  const fromDate = from ? new Date(from) : null;
  const toDate = to ? new Date(to) : null;

  return jogs.filter((jog) => {
    const jogDate = new Date(jog.date);
    return (!fromDate || jogDate >= fromDate) && (!toDate || jogDate <= toDate);
  });
};
