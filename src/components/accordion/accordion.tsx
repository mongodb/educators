import { useEffect, useRef, useState } from 'react';
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
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<string>('0px');

  useEffect(() => {
    setContentHeight(`${contentRef.current?.scrollHeight}px`);
  }, [isOpen]);

  function onToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div sx={{ ...styles.Accordion, ...wrapperStyles }}>
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
      <div
        ref={contentRef}
        sx={{
          ...styles.AccordionBody,
          ...(isOpen && {
            height: contentHeight,
            paddingBottom: 'inc50',
          }),
        }}
      >
        <Markdown text={body} />
      </div>
    </div>
  );
}
