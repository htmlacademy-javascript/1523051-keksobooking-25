const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const offerPhotoChooser = document.querySelector('.ad-form__upload input[type=file]');
const offerPhotoPreview = document.querySelector('.ad-form__photo');
offerPhotoChooser.addEventListener('change', () => {

  const filePhoto = offerPhotoChooser.files[0];
  const filePhotoName = filePhoto.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => filePhotoName.endsWith(it));

  if (matches) {
    const photo = document.createElement('img');
    photo.width = 70;
    photo.height = 70;
    offerPhotoPreview.appendChild(photo);
    const preview = offerPhotoPreview.querySelector('img');
    preview.src = URL.createObjectURL(filePhoto);
  }
});
