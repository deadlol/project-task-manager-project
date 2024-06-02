import { useRef } from "react";
import Input from "./Input";
import Modal from "./MOdal";

export default function NewProject({ onAdd , onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    let inputTitle = title.current.value;
    let inputDescription = description.current.value;
    let inputDueDate = dueDate.current.value;

    if (
      inputTitle.trim() === "" ||
      inputDescription.trim() === "" ||
      inputDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: inputTitle,
      description: inputDescription,
      dueDate: inputDueDate,
    });
  }
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Opps... Looks Like You Forgot To Enter A Value..
        </p>
        <p className="text-stone-600 mb-4">
          Please Make Sure You Provide A Valid Value For Every Input Field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" isTextArea />
          <Input type="date" ref={dueDate} label="Due Time" />
        </div>
      </div>
    </>
  );
}
