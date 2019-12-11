const compile = require("./compile");
module.exports = (name)=>{
    return function(req, res, next) {
        const data = compile.loadView(`./views/menu/${name}.handlebars`, {
          name
        });
        res.write(data);
        next();
      };

}



