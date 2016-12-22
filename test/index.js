var test = function(name, path) {
    describe(name, function() {
        require(path);
    });
};

test("@auth", "./auth-test");
