import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

interface BackgroundLetterAvatarsProps {
  nameUser: string;
  sizes: string | number;
  textSize: string;
}

export default function BackgroundLetterAvatars({
  nameUser,
  sizes,
  textSize,
}: BackgroundLetterAvatarsProps) {
  function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        width: sizes,
        height: sizes,
        fontSize: textSize,
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar(nameUser)} />
    </Stack>
  );
}
