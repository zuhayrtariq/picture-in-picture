const video = document.querySelector('video');
const button = document.querySelector('button');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia(); //getting media
        video.srcObject = mediaStream; //storing media in our video tag
        video.onloadedmetadata = () => { //waiting for video to be loaded
            video.play(); //playing video
        }
    } catch (error) {

    }
}
button.addEventListener('click', async() => {
    button.disabled = true;
    await video.requestPictureInPicture();
    button.disabled = false;
})
selectMediaStream();