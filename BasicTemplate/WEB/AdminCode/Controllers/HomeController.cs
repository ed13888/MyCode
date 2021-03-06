﻿using AdminCode.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WEBService.AdminBusiness;
using WEBService.BusinessModels.ParamModel;
using WEBService.Security;
using WEBService.Util;

namespace AdminCode.Controllers
{

    public class HomeController : BaseController
    {
        [CustomAction]
        public ActionResult Index()
        {
            if (Authentication.CheckAuthentication() == 0)
            {
                ViewBag.Local = true;
            }
            else
            {
                return Redirect("/Home/Login");
            }
            return View();
        }

        public ActionResult Login()
        {
            Authentication.Logout();
            return View();
        }

        [AcceptVerbs(HttpVerbs.Post)]
        public ActionResult Login(string username, string password, string validateCode = "", string googlecode = "", int accountfid = 0)
        {
            //表示需要验证谷歌验证码
            ViewBag.UserName = username;
            if (string.IsNullOrEmpty(password))
            {
                ViewBag.ErrorTip = "密码不能为空";
                return View();
            }
            if (accountfid != 0 && string.IsNullOrEmpty(googlecode))
            {
                ViewBag.ErrorTip = "谷歌验证码不能为空";
                return View();
            }
            username = username.Trim();
            password = password.Trim();

            var param = new LoginData() { AccountFid = accountfid, GoogleCode = googlecode, UserName = username, Password = password, ValidateCode = validateCode, ClientFlag = "", OnlyFlag = "" };
            var result = AccountBll.Login(this, false, param);
            if (!string.IsNullOrEmpty(result.Url) && result.Status)
            {
                if (HttpContext.Request.IsAjaxRequest())
                    return Json(new { url = Url.Content(result.Url) });
                else
                    return Redirect(Url.Content(result.Url));
            }

            return View();
        }

        [CustomAction]
        public ActionResult Main()
        {
            return View();
        }

        [CustomAction]
        [CustomAuthorize("User")]
        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

    }
}