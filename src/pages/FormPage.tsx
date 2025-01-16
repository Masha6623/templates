import { TemplateList } from "../components/TemplateList";
import { DynamicForm } from "../components/DynamicForm";
import { RootState } from "../store/store";
import { useAppSelector } from "../store/hooks";

export const FormPage = () => {
  const selectedTemplate = useAppSelector(
    (state: RootState) => state.templates.selectedTemplate
  );

  return (
    <div>
      <TemplateList />
      {selectedTemplate && <DynamicForm />}
    </div>
  );
};
