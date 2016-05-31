# pixel_density_calibration
A task that can be embedded into a qualtrics survey (or other site with modifications) to determine the pixel density of a user's screen

This was originally designed to go into a Qualtrics question, but with just a little bit of modification it could go into any type of site

## Usage
In Qualtrics, create a new "descriptive text" question and copy the contents of qualtrics_question_text.html into the question using the source editor.

You will need to upload the image file you are using, such as the credit card image, to qualtrics and change the src attribute of the img tag to match its path in qualtrics

In the edit survey page, click the dropdown on the left side of the question and "Add Javascript", or see these instructions:

https://www.qualtrics.com/support/survey-platform/survey-module/question-options/add-javascript/

Copy the contents of pixel_density_qualtrics into the javascript editor and save.

Create an embedded data field called "dpi" in your survey so qualtrics has a place to store the value. 
