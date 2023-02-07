import { useState } from 'react';
import { ESystemIconNames, SystemIcon, TypographyScale } from '@mdb/flora';
import Markdown from 'components/markdown';
import { AccordionProps } from './types';
import styles from './styles';

export default function Accordion({ title, body }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button onClick={onToggle} sx={styles.AccordionHeader}>
        <TypographyScale variant="heading6">{title}</TypographyScale>
        <SystemIcon
          size="medium"
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
