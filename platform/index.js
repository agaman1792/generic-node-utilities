const getPlatform = () => {
  if (process.platform === 'win32')
    return 'windows';

  return '*nix';
};

const getUserHome = () => {
  const platform = getPlatform();
  const mappings = [
    { platform: 'windows', home: process.env.USERPROFILE },
    { platform: '*nix', home: process.env.HOME }
  ];

  return mappings.find(m => m.platform === platform).home;
};

module.exports = {
  getPlatform, getUserHome
};