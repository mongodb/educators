import { useState } from 'react';
import { ESystemIconNames, SystemIcon, TypographyScale } from '@mdb/flora';
import Markdown from 'components/markdown';
import { AccordionProps } from './types';
import styles from './styles';

export default function Accordion({
  title,
  body,
  wrapperStyles = {},
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div sx={{ ...wrapperStyles }}>
      <button onClick={onToggle} sx={styles.AccordionHeader}>
        <TypographyScale variant="heading6" sx={styles.AccordionHeaderText}>
          {title}
        </TypographyScale>
        <SystemIcon
          size="medium"
          color="success"
          name={isOpen ? ESystemIconNames.MINUS : ESystemIconNames.PLUS}
        />
      </button>
      {isOpen && (
        <div sx={styles.AccordionBody}>
          <Markdown text={body} />
        </div>
      )}
    </div>
  );
}
