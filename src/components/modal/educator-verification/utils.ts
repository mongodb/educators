export const INSTITUTION_RADIO_VALUES = {
  HS: 'high-school',
  COLLEGE: 'college',
  UNI: 'university',
  BOOTCAMP: 'bootcamp',
};

export const LOCATION_RADIO_VALUES = {
  VERIFIED: 'verified',
  OTHER: 'other',
};

export const INSTITUTION_RADIO_GROUP_CONFIG = [
  {
    value: INSTITUTION_RADIO_VALUES.HS,
    title: 'High School',
  },
  {
    value: INSTITUTION_RADIO_VALUES.COLLEGE,
    title: 'College',
  },
  {
    value: INSTITUTION_RADIO_VALUES.UNI,
    title: 'University',
  },
  {
    value: INSTITUTION_RADIO_VALUES.BOOTCAMP,
    title: 'Bootcamp',
  },
];

export const LOCATION_RADIO_GROUP_CONFIG = [
  {
    value: LOCATION_RADIO_VALUES.VERIFIED,
    title: 'United States, Ireland or India',
  },
  {
    value: LOCATION_RADIO_VALUES.OTHER,
    title: 'Other',
  },
];

export const RADIO_GROUPS = {
  INSTITUTION: 'institution-radio-group',
  LOCATION: 'location-radio-group',
};
