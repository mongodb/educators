import { ESystemIconNames, SystemIcon } from '@mdb/flora';
import { useModalContext } from 'contexts/modal';

import styles from './styles';

export default function Modal() {
  const { component, closeModal } = useModalContext();

  function onCloseButtonClick() {
    closeModal();
  }

  // TODO: add "clickOutside" functionality

  return component ? (
    <div sx={styles.ModalWrapper}>
      <div sx={styles.ModalBody}>
        <button
          type="button"
          title="Close Modal"
          sx={styles.ModalCloseBtn}
          onClick={onCloseButtonClick}
        >
          <SystemIcon name={ESystemIconNames.CLOSE} />
        </button>
        {component}
      </div>
    </div>
  ) : null;
}
