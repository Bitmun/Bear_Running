import { Dispatch, SetStateAction } from 'react';

import { DateRange } from '@pages/Home/type';

export interface FilterPanelProps {
  setDateRange: Dispatch<SetStateAction<DateRange>>;
}
