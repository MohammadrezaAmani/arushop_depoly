"use client";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      maxWidth="sm"
      sx={{
        pt: "128px",
        pb: "32px",
        height: "100vh",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        color="text.primary"
        sx={{
          width: { sm: "100%", md: "60%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        پرسش‌های متداول
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography component="h3" variant="subtitle2">
              چطور می‌توانم با پشتیبانی مشتری تماس بگیرم اگر سوال یا مشکلی دارم؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              می‌توانید با ارسال ایمیل به <Link>support@email.com</Link> یا تماس
              با شماره تلفن رایگان ما با تیم پشتیبانی مشتری تماس بگیرید. ما
              اینجا هستیم تا به شما سریعا کمک کنیم.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <Typography component="h3" variant="subtitle2">
              آیا می‌توانم محصول را برگردانم اگر با انتظارات من مطابقت ندارد؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              البته! ما یک سیاست بازگشت بدون مشکل ارائه می‌دهیم. اگر کاملاً راضی
              نیستید، می‌توانید محصول را در [تعداد روز] روز برای بازپرداخت کامل
              یا تعویض برگردانید.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <Typography component="h3" variant="subtitle2">
              چه چیزی محصول شما را از دیگران در بازار متمایز می‌کند؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              محصول ما خود را از طریق انعطاف پذیری، مقاومت و ویژگی‌های نوآورانه
              متمایز می‌کند. ما بر ارضای کاربر و بهبود مداوم در هر جنبه تمرکز
              داریم.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4d-content"
            id="panel4d-header"
          >
            <Typography component="h3" variant="subtitle2">
              آیا بر روی محصول گارانتی وجود دارد و چه چیزی را پوشش می‌دهد؟
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="body2"
              gutterBottom
              sx={{ maxWidth: { sm: "100%", md: "70%" } }}
            >
              بله، محصول ما دارای گارانتی [طول گارانتی] است. این گارانتی عیوب
              مواد و کارکرد را پوشش می‌دهد. اگر با مشکلاتی که تحت پوشش گارانتی
              است مواجه شدید، لطفاً برای کمک با پشتیبانی مشتری تماس بگیرید.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
}
