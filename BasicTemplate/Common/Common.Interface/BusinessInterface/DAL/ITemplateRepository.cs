﻿using Common.Entity.Business;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common.Interface.BusinessInterface.DAL
{
    public interface ITemplateRepository
    {
        int Insert(TemplateEntity m);
        IList<TemplateEntity> GetList(string strWhere = "");
        TemplateEntity GetById(int id);

        int IncreaceCheckCount(int id);
    }
}
