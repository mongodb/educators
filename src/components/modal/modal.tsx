import { useRef } from 'react';
import { ESystemIconNames, SystemIcon } from '@mdb/flora';
import { useModalContext } from 'contexts/modal';
import useOnClickOutside from 'hooks/useOnClickOutside';

import styles from './styles';

export default function Modal() {
  const { component, closeModal } = useModalContext();

  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, closeModal);

  return component ? (
    <div sx={styles.ModalWrapper} data-testid="modal-wrapper">
      <div ref={ref} sx={styles.ModalBody}>
        <button
          type="button"
          title="Close Modal"
          sx={styles.ModalCloseBtn}
          onClick={() => closeModal()}
        >
          <SystemIcon name={ESystemIconNames.CLOSE} />
        </button>
        <div sx={styles.ModalContent}>{component}</div>
      </div>
    </div>
  ) : null;
}
