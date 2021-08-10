class Mail {
  constructor(_id, to, subject, text, html, display) {
    this._id = _id;
    this.to = to;
    this.subject = subject;
    this.text = text;
    this.html = html;
    this.display = display;
  }
}

export default Mail;
