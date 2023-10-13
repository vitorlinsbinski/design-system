import { Label, MultiStepContainer, Step, StepDone, Steps } from "./styles";

export function MultiStep({ size, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {size}
      </Label>

      <Steps css={{ "--steps-size": size }}>
        {Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return (
            <Step key={step}>
              <StepDone
                active={currentStep >= step}
                reverse={currentStep < step}
              ></StepDone>
            </Step>
          );
        })}
      </Steps>
    </MultiStepContainer>
  );
}

export interface MultiStepProps {
  size: number;
  currentStep?: number;
}

MultiStep.displayName = "MultiStep";
