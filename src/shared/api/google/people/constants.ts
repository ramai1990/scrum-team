const discoveryDocs = {
  v1: 'https://www.googleapis.com/discovery/v1/apis/people/v1/rest',
};
const scopes = {
  profile: 'profile',
  email: 'email',
  userBirthdayRead: 'https://www.googleapis.com/auth/user.birthday.read',
  userPhoneNumbersRead:
    'https://www.googleapis.com/auth/user.phonenumbers.read',
};

// https://developers.google.com/people/api/rest/v1/people#Person.Photo

const photoURLSizeFragment = {
  responded: '=s100',
  requested: '=s280',
};

export { discoveryDocs, scopes, photoURLSizeFragment };
