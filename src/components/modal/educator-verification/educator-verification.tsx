import { useState } from 'react';
import { TypographyScale, RadioGroup, Radio, Button } from '@mdb/flora';

import { useModalContext } from 'contexts/modal';

import SheerIdContainer from './sheer-id-container';

import {
  RADIO_GROUPS,
  LOCATION_RADIO_VALUES,
  INSTITUTION_RADIO_VALUES,
  LOCATION_RADIO_GROUP_CONFIG,
  INSTITUTION_RADIO_GROUP_CONFIG,
} from './utils';

import styles from './styles';

export default function EducatorVerification({
  openForm,
}: {
  openForm: () => void;
}) {
  const { closeModal, openModal } = useModalContext();

  const [radioGroupSelections, setRadioGroupSelections] = useState({
    [RADIO_GROUPS.INSTITUTION]: '',
    [RADIO_GROUPS.LOCATION]: '',
  });
  const [showLocationRadioGroup, setShowLocationRadioGroup] = useState(false);

  function openManualForm() {
    closeModal();
    openForm();
  }

  function onInstitutionRadioGroupChange(selection: string) {
    setRadioGroupSelections(prev => ({
      ...prev,
      [RADIO_GROUPS.INSTITUTION]: selection,
    }));
  }

  function onLocationRadioGroupChange(selection: string) {
    setRadioGroupSelections(prev => ({
      ...prev,
      [RADIO_GROUPS.LOCATION]: selection,
    }));
  }

  function onContinueBtnClick() {
    // Only first radio group has value on continue click, either show the second group or open manual form
    if (
      radioGroupSelections[RADIO_GROUPS.INSTITUTION] &&
      !radioGroupSelections[RADIO_GROUPS.LOCATION]
    ) {
      if (
        radioGroupSelections[RADIO_GROUPS.INSTITUTION] !==
        INSTITUTION_RADIO_VALUES.BOOTCAMP
      ) {
        setShowLocationRadioGroup(true);
      } else {
        openManualForm();
      }
      return;
    }

    // Second radio group selection on continue click, show manual form or open the Sheer Id form
    if (
      radioGroupSelections[RADIO_GROUPS.LOCATION] ===
      LOCATION_RADIO_VALUES.OTHER
    ) {
      openManualForm();
    } else {
      openModal(<SheerIdContainer />);
    }
  }

  return (
    <div sx={styles.EduVerificationWrapper}>
      <TypographyScale variant="heading4" sx={styles.EduVerficationTitle}>
        Verify Educator Status
      </TypographyScale>
      <TypographyScale
        variant="body2"
        sx={styles.EduVerificationRadioGroupLabel}
      >
        What is your institutional affiliation?
      </TypographyScale>
      <RadioGroup
        name={RADIO_GROUPS.INSTITUTION}
        onChange={onInstitutionRadioGroupChange}
        sx={styles.EduVerficationRadioGroup}
      >
        {INSTITUTION_RADIO_GROUP_CONFIG.map(({ value, title }) => (
          <Radio key={value} value={value}>
            {title}
          </Radio>
        ))}
      </RadioGroup>
      {showLocationRadioGroup && (
        <>
          <TypographyScale
            variant="body2"
            sx={styles.EduVerificationRadioGroupLabel}
          >
            What is your institutional affiliation?
          </TypographyScale>
          <RadioGroup
            name={RADIO_GROUPS.LOCATION}
            onChange={onLocationRadioGroupChange}
            sx={styles.EduVerficationRadioGroup}
          >
            {LOCATION_RADIO_GROUP_CONFIG.map(({ value, title }) => (
              <Radio key={value} value={value}>
                {title}
              </Radio>
            ))}
          </RadioGroup>
        </>
      )}
      <Button
        onClick={onContinueBtnClick}
        customWrapperStyles={styles.EduVerficationBtn}
        disabled={
          !radioGroupSelections[RADIO_GROUPS.INSTITUTION] &&
          !radioGroupSelections[RADIO_GROUPS.LOCATION]
        }
      >
        Continue
      </Button>
    </div>
  );
}
