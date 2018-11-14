// This agent refers to PORT where program is runninng.
let supertest = require("supertest");
let server = supertest.agent("http://localhost:3000");

//==================== Route test ====================

/**
 * Testing get grocyerList
 */
describe("GET /product", function () {
    it("respond with json containing a list of all grocery\'s", function (done) {
        // calling home page api
        server
            .get("/product")
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                console.log(res.body);
                console.log('Test successful!');
                done();
            })
    });
});

let productid;
/**
 * Testing post grocyerlist item (not All parameters)
 */
describe("Post /product", function () {
    it("Adding item to grocerylist", function (done) {
        // calling home page api
        server
            .post('/product').send('name=Zwiebeln&amount=3&type=Stueck&bought=false')
            .expect(201) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                productid = res.body['data']['_id'];
                console.log(res.body);
                console.log('Test successful!');
                done();
            })
    });
});

/**
 * Testing post grocyerlist item with missing name
 */
describe("Post /product", function () {
    it("Adding item to grocerylist with missing name", function (done) {
        // calling home page api
        server
            .post('/product').send('amount=3&type=Stueck&bought=false')
            .expect(400) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                console.log(res.body);
                console.log('Test successful!');
                done();
            })
    });
});


/**
 * Testing to update grocyerlist item
 */
describe("Patch /product", function () {
    it("update item from grocerylist", function (done) {
        // calling home page api
        console.log('productid = '+productid.toString());
        server
            .patch('/product/'+ productid.toString()).send('&description=red')
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                console.log(res.body);
                console.log('Test successful!');
                done();
            })
    });
});


/**
 * Testing to update grocyerlist item without specified id
 */
describe("Patch /product", function () {
    it("update item from grocerylist with wrong id", function (done) {
        // calling home page api
        server
            .patch('/product/-24').send('description=red')
            .expect(404) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                console.log(res.body);
                console.log('Test successful!');
                done();
            })
    });
});

/**
 * Testing to update grocyerlist item with wrong id
 */
describe("Patch /product", function () {
    it("update item from grocerylist with wrong id)", function (done) {
        // calling home page api
        server
            .patch('/product/-24').send('description=red')
            .expect(404) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                console.log(res.body);
                console.log('Test successful!');
                done();
            })
    });
});


/**
 * Testing to delete grocyerlist item
 */
describe("Delete /product", function () {
    it("delete item from grocerylist", function (done) {
        // calling home page api
        server
            .delete('/product/' + productid.toString())
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                console.log(res.body);
                console.log('Test successful!');
                done();
            })
    });
});

/**
 * Testing to delete grocyerlist item which is not in grocerylist
 */
describe("Delete /product", function () {
    it("Trying to delete item which is not in grocerylist", function (done) {
        // calling home page api
        server
            .delete('/product/-24')
            .expect(404) // THis is HTTP response
            .end(function (err, res) {
                if (err) {
                    console.log('Failed!\n' + err);
                    return;
                }
                console.log('Test successful!');
                done();
            })
    });
});

