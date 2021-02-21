using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using ckeditor_with_image_upload_mvc.Models;
using System.Web.Mvc;

namespace ckeditor_with_image_upload_mvc.Controllers
{
    public class HomeController : Controller
    {
        CKEditorExampleEntities db = new CKEditorExampleEntities();
        public ActionResult Index()
        {
            var list = db.Articles.ToList();
            return View(list);
        }

        [HttpGet]
        public ActionResult AddArticle()
        {

            return View();
        }

        [ValidateInput(false)]
        [HttpPost]
        public ActionResult AddArticle(Articles addParam)
        {
            db.Articles.Add(addParam);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

    }
}