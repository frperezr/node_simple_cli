'use strict';

// node modules
const assert = require('assert');

// db model
const Contact = require('./models/contact');

// helper class
class CrudHelper {
    /**
     * @function  [addContact]
     * @returns {String} Status
     */
    static addContact(contact) {
      Contact.create(contact, (err) => {
        assert.equal(null, err);
        console.info('New contact added');
        return process.exit(0);
      });
    };
    /**
     * @function  [getContact]
     * @returns {Json} contacts
     */
    static getContact(name) {
      // Define search criteria. The search here is case-insensitive and inexact.
      /*
      // case-insensitive inexact matches
      const search = new RegExp(name, 'i');
      // case-insensitive exact match
      const search = new RegExp(`^${name}$`, 'i');
       */
      const search = new RegExp(name, 'i');
      Contact.find({ $or: [ { firstname: search }, { lastname: search } ] })
      .exec((err, contact) => {
        assert.equal(null, err);
        console.info(contact);
        console.info(`${contact.length} matches`);
        return process.exit(0);
      });
    };
    /**
     * @function  [updateContact]
     * @returns {Sting} status
     */
    static updateContact(_id, contact) {
      Contact.update({ _id }, contact)
      .exec((err, status) => {
        assert.equal(null, err);
        console.info('Updated successfully');
        return process.exit(0);
      });
    };
    /**
     * @function  [deleteContact]
     * @returns {String} status
     */
    static deleteContact(_id) {
      Contact.remove({ _id })
      .exec((err, status) => {
        assert.equal(null, err);
        console.info('Deleted successfully');
        return process.exit(0);
      })
    }
    /**
     * @function  [getContactList]
     * @returns [contactlist] contacts
     */
    static getContactList() {
      Contact.find()
      .exec((err, contacts) => {
        assert.equal(null, err);
        console.info(contacts);
        console.info(`${contacts.length} matches`);
        return process.exit(0);
      })
    }
}
// export helper class
module.exports = CrudHelper;
