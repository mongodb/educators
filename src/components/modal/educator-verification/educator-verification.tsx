import { useState } from 'react';
import { TypographyScale, RadioGroup, Radio } from '@mdb/flora';

import { useModalContext } from 'contexts/modal';

import {
  INSTITUTION_RADIO_VALUES,
  INSTITUTION_RADIO_GROUP_CONFIG,
  LOCATION_RADIO_GROUP_CONFIG,
} from './utils';

export default function EducatorVerification({ openForm }: any) {
  console.log('openForm', openForm);
  const { closeModal } = useModalContext();

  const [showLocationRadioGroup, setShowLocationRadioGroup] = useState(false);

  function onInstitutionRadioGroupChange(selection: string) {
    setShowLocationRadioGroup(selection !== INSTITUTION_RADIO_VALUES.BOOTCAMP);
  }

  function onLocationRadioGroupChange(selection: string) {
    if (selection === 'other') {
      closeModal();
      openForm();
    }
  }

  return (
    <div>
      <TypographyScale variant="heading3">
        Verify Educator Status
      </TypographyScale>
      <TypographyScale>What is your institutional affiliation?</TypographyScale>
      <RadioGroup
        name="institution-radio-group"
        onChange={onInstitutionRadioGroupChange}
      >
        {INSTITUTION_RADIO_GROUP_CONFIG.map(({ value, title }) => (
          <Radio key={value} value={value}>
            {title}
          </Radio>
        ))}
      </RadioGroup>
      {showLocationRadioGroup && (
        <>
          <TypographyScale>
            What is your institutional affiliation?
          </TypographyScale>
          <RadioGroup
            name="location-radio-group"
            onChange={onLocationRadioGroupChange}
          >
            {LOCATION_RADIO_GROUP_CONFIG.map(({ value, title }) => (
              <Radio key={value} value={value}>
                {title}
              </Radio>
            ))}
          </RadioGroup>
        </>
      )}
    </div>
  );
}
