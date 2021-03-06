﻿using Common.Entity.Business;
using Common.Interface.BusinessInterface.DAL;
using Common.Misc.SQL;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Business
{
    public class TemplateRepository : ITemplateRepository
    {
        public TemplateRepository()
        {

        }

        public TemplateEntity GetById(int id)
        {
            var sql = $"select * from TTemplate where FId=@FId limit 0,1";
            var m = MySqlHelper.SingleOrDefault<TemplateEntity>(null, sql, new { @FId = id });
            return m;
        }

        public IList<TemplateEntity> GetList(string strWhere = "")
        {
            var sql = "select * from TTemplate";
            var list = MySqlHelper.Query<TemplateEntity>(null, sql).ToList();
            return list;
        }

        public int IncreaceCheckCount(int id)
        {
            var sql = $"update TTemplate set FCheckCount=FCheckCount+1 where FId=@FId";
            var val = MySqlHelper.Execute(sql, new { @FId = id });
            return val;
        }

        public int Insert(TemplateEntity m)
        {
            //var param = new
            //{
            //    @FUId = Guid.NewGuid().ToString("N"),
            //    @FTitle = m.FTitle,
            //    @FMusic = m.FMusic,
            //    @FPhoto = m.FPhoto,
            //    @FDescription = m.FDescription,
            //    @FProducer = m.FProducer,
            //    @FP1 = m.FP1,
            //    @FP2 = m.FP2,
            //    @FP3 = m.FP3,
            //    @FP4 = m.FP4,
            //    @FP5 = m.FP5,
            //    @FP6 = m.FP6,
            //    @FP7 = m.FP7,
            //    @FP8 = m.FP8,
            //    @FP9 = m.FP9,
            //    @FP10= m.FP10

            //};


            //var sql = @"INSERT INTO `ttemplate`(`FUId`,`FTitle`,`FMusic`,`FPhoto`,`FDescription`,`FProducer`,`FP1`,`FP2`,`FP3`,`FP4`,`FP5`,`FP6`,`FP7`,`FP8`,`FP9`,`FP10`)
            //VALUES(@FUId,@FTitle,@FMusic,@FPhoto,@FDescription,@FProducer,@FP1,@FP2,@FP3,@FP4,@FP5,@FP6,@FP7,@FP8,@FP9,@FP10);";

            //var val = MySqlHelper.Execute(sql, param);
            var val = 0;
            return val;
        }
    }
}
