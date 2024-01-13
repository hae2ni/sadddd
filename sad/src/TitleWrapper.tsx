import styled from "styled-components";
import { RenderDownloadProps } from "@react-pdf-viewer/get-file";
import { GetFilePlugin } from "@react-pdf-viewer/get-file";
import { RenderEnterFullScreenProps } from "@react-pdf-viewer/full-screen";
import { FullScreenPlugin } from "@react-pdf-viewer/full-screen";

interface TitleWrapperProps {
  title: string;
  buttonText: string;
  ifExplanation?: boolean;
  ifPdfButton?: boolean;
  getFilePluginInstance?: GetFilePlugin;
  setIsHide: React.Dispatch<React.SetStateAction<boolean>>;
  fullScreenPluginInstance?: FullScreenPlugin;
  isQuestionHide?: boolean;
}

export default function TitleWrapper(props: TitleWrapperProps) {
  const {
    title,
    buttonText,
    ifExplanation,
    ifPdfButton,
    getFilePluginInstance,
    setIsHide,
    fullScreenPluginInstance,
    isQuestionHide,
  } = props;

  const renderDownloadButton = () => {
    if (getFilePluginInstance) {
      const { Download } = getFilePluginInstance;
      return (
        <Download>
          {(props: RenderDownloadProps) => (
            <Button type="button" onClick={props.onClick}>
              첨삭 PDF로 저장
            </Button>
          )}
        </Download>
      );
    }
  };

  const renderFullScreenButton = () => {
    if (fullScreenPluginInstance) {
      const { EnterFullScreen } = fullScreenPluginInstance;
      return (
        <EnterFullScreen>
          {(props: RenderEnterFullScreenProps) => <Button onClick={props.onClick}>PDF로 크게보기</Button>}
        </EnterFullScreen>
      );
    }
  };

  const renderHideButton = () => {
    if (!ifExplanation) {
      return (
        <Button
          type="button"
          onClick={() => {
            setIsHide(true);
          }}>
          {buttonText}
        </Button>
      );
    } else return;
  };

  return (
    <TitleWrapperContainer>
      <Title>{title}</Title>
      {isQuestionHide && renderFullScreenButton()}
      {!ifExplanation && ifPdfButton ? renderDownloadButton() : renderHideButton()}
    </TitleWrapperContainer>
  );
}

const TitleWrapperContainer = styled.div`
  justify-content: space-between;
  width: calc((100vw - 16.8rem) / 2);
  padding: 0 2.5rem 0 2.4rem;
`;

const Title = styled.p`
`;

const Button = styled.button`

  padding: 0.6rem 2rem;
`;
