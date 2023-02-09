var MailList = /** @class */ (function () {
    // Essa sintaxe no construtor é chamada `Parameter Properties`
    // É um atalho para declarar e automaticamente atribuir o valor que será recebido via parâmetro ao atributo privado `mailList`
    function MailList(mailList) {
        if (mailList === void 0) { mailList = []; }
        this.mailList = mailList;
    }
    Object.defineProperty(MailList.prototype, "all", {
        get: function () { return this.mailList; },
        enumerable: false,
        configurable: true
    });
    MailList.prototype.getEmailsSentBy = function (mailAddress) {
        return this.mailList.filter(function (mail) { return mail.from === mailAddress; });
    };
    MailList.prototype.getByEmailFrom = function (mailAddress) {
        return this.mailList.filter(function (mail) { return mail.from === mailAddress; });
    };
    MailList.prototype.getEmailsTo = function (mailAddress) {
        return this.mailList.filter(function (mail) { return mail.to === mailAddress; });
    };
    MailList.prototype.getEmailsBySubject = function (searchString) {
        return this.mailList
            .filter(function (mail) { return mail.subject.indexOf(searchString) !== -1; });
    };
    MailList.prototype.addEmail = function (newMail) { this.mailList.push(newMail); };
    MailList.prototype.removeEmail = function (mailToRemove) {
        // note que como essa é uma comparação de objetos, esse filter só funcionará se a referência de `mail` e `mailToRemove` for a mesma
        this.mailList = this.mailList.filter(function (mail) { return mail !== mailToRemove; });
    };
    return MailList;
}());
/// testar o cogido a cima
// Para testar
var friendEmail = 'friend@personalmail.com';
var myEmail = 'me@personalmail.com';
var email1 = new Email(myEmail, friendEmail, 'Car wash', 'There\'s a new car wash in town. Did you know?');
var email2 = new Email(friendEmail, myEmail, 'Reply - Car wash', 'Great! My car is really dirty. How much do they charge?');
var email3 = new Email(myEmail, friendEmail, 'Reply - Reply - Car wash', '$5.00, and you get a free polishing cloth');
var email4 = new Email('me@companymail.com', 'ceo@companymail.com', 'Day off monday', "Next Tuesday is a holiday.\n  Are we going to work on Monday?");
var email5 = new Email('ceo@companymail.com', 'me@companymail.com', 'Reply - Day off monday', 'The entire company will have a day off on monday =D');
var personalMailList = new MailList([email1, email2, email3]);
var professionalMailList = new MailList([email4, email5]);
console.log('------ personalMailList.getByEmailFrom(\'me@personalmail.com\'):');
personalMailList.getByEmailFrom(myEmail).forEach(function (mail) { return console.log(mail.content); });
var email6 = new Email(myEmail, 'friend2@personalmail.com', 'Day off monday', "Oh yes!\n   My boss says we'll have Monday off.\n   Want to go to the movies?");
personalMailList.addEmail(email6);
personalMailList.addEmail(email5); // Adicionado erroneamente
console.log('------ personalMailList.getBySubject(\'Day off\'):');
personalMailList.getEmailsBySubject('Day off').forEach(function (mail) { return console.log(mail.content); });
personalMailList.removeEmail(email5);
console.log('------ professionalMailList.all:');
professionalMailList.all.forEach(function (mail) { return console.log(mail.content); });
console.log('------ personalMailList.all:');
personalMailList.all.forEach(function (mail) { return console.log(mail.content); });
