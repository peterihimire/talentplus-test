import React from "react";
import guyHeadset from "../../../../assets/images/guy-on-headset.png";
import { ReactComponent as PreviewStacksIcon } from "../../../../assets/images/preview-stacks-two.svg";
import { ReactComponent as VolumeIcon } from "../../../../assets/images/volume-up.svg";
import { ReactComponent as CrownIcon } from "../../../../assets/images/crown.svg";

import "./styles.scss";

const HighQuality = () => {
  return (
    <section className={`high-quality`}>
      <div className="wrapper">
        <div className={`container`}>
          <div className={`left`}>
            <CrownIcon className={`crown-icon`} />
            <h3>
              High quality video, audio
              <br />
              and live classes
            </h3>
            <p>
              High-defination video is video of higher resolution and quality
              than standard definition. while there’s no standard meaning for
              high definition, generally any standard video image
            </p>
            <div className={`get-started`}>
              <button className="btn-primary  btn-medium ">View courses</button>
            </div>
            <div className={`reasons-wrapper`}>
              <div className={`top`}>
                <div className={`reason-item`}>
                  <VolumeIcon className={`reason-icon`} />{" "}
                  <span>Audio classes</span>
                </div>
                <div className={`reason-item`}>
                  <VolumeIcon className={`reason-icon`} />{" "}
                  <span>Live classes</span>
                </div>
              </div>

              <div className={`bottom`}>
                <div className={`reason-item`}>
                  <VolumeIcon className={`reason-icon`} />{" "}
                  <span>Recorded classes</span>
                </div>
                <div className={`reason-item`}>
                  <VolumeIcon className={`reason-icon`} />{" "}
                  <span>50+ notes</span>
                </div>
              </div>
            </div>
          </div>
          <div className={`rightt`}>
            <img src={guyHeadset} alt="" />
            <PreviewStacksIcon className={`preview-stack`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighQuality;