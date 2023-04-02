import { theme } from '~/theme';
import { BackgroundImage, Box, Footnote, SubTitle } from '~/components/atoms';

type RecruitPreviewType = {
  image: string;
  title: string;
  text: string;
};

export const RecruitPreview: React.FC<RecruitPreviewType> = ({
  image,
  title,
  text,
}) => {
  return (
    <>
      <BackgroundImage image={image} size={{ height: '170px' }} />
      <Box paddingTop={theme.space.s}>
        <Footnote text={text} marginTop="" />
        <SubTitle text={title} />
      </Box>
    </>
  );
};
