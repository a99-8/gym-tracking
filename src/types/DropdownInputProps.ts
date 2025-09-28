interface DropdownInputProps {
  selectedValue: string;
  setModalVisible: (visible: boolean) => void;
  modalVisible: boolean;
  handleSelection: (item: string) => void;
}

export default DropdownInputProps;
